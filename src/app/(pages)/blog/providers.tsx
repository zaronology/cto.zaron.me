function buildQueryParams(obj: Record<string, any>, prefix = ""): Record<string, string> {
  const params: Record<string, string> = {};

  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null) continue;

    const paramKey = prefix ? `${prefix}[${key}]` : key;
    const value = obj[key];

    if (Array.isArray(value)) {
      params[paramKey] = value.join(",");
    } else if (typeof value === "object") {
      Object.assign(params, buildQueryParams(value, paramKey));
    } else {
      params[paramKey] = String(value);
    }
  }

  return params;
}

export function toURLSearchParams(obj: Record<string, any>): URLSearchParams {
  const flatParams = buildQueryParams(obj);
  return new URLSearchParams(flatParams);
}

function tryParse(val: string): any {
  if (val === "true") return true;
  if (val === "false") return false;
  const num = Number(val);
  return isNaN(num) ? val : num;
}

export function parseQueryParams(input: string | URLSearchParams): Record<string, any> {
  const params = typeof input === "string" ? new URLSearchParams(input.startsWith("?") ? input : `?${input}`) : input;

  const result: Record<string, any> = {};

  for (const [fullKey, value] of params.entries()) {
    const keys: string[] = [];
    const regex = /([^\[\]]+)/g;
    let match;

    while ((match = regex.exec(fullKey)) !== null) {
      keys.push(match[1]);
    }

    let current = result;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (i === keys.length - 1) {
        const parsedValue = value.includes(",") ? value.split(",").map(tryParse) : tryParse(value);
        current[key] = parsedValue;
      } else {
        if (!current[key] || typeof current[key] !== "object") {
          current[key] = {};
        }
        current = current[key];
      }
    }
  }

  return result;
}
