const SHEET_KEY = "gregorian-expanded-sheets"

export function getExpandedSheetMap(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(SHEET_KEY) ?? "{}")
  } catch {
    return {}
  }
}

export function updateExpandedSheetMap(id: string, value: boolean) {
  const map = getExpandedSheetMap()
  map[id] = value
  localStorage.setItem(SHEET_KEY, JSON.stringify(map))
}