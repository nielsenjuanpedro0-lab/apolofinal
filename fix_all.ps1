$raw = [System.IO.File]::ReadAllText("src\App.tsx", [System.Text.Encoding]::UTF8)

# Fix the broken Link tag first
$raw = $raw -replace "Ver Detalles`r?`n              </div>", "Ver Detalles</Link>`r?`n              </div>"

# Fix corrupted characters
$fixes = @{
    "Ã³" = "ó";
    "Ã¡" = "á";
    "Ã±" = "ñ";
    "Ã©" = "é";
    "Ã" = "í";
    "Â" = ""; # Common in UTF-8 -> Latin1 misinterpretation
}

foreach ($key in $fixes.Keys) {
    $raw = $raw.Replace($key, $fixes[$key])
}

[System.IO.File]::WriteAllText("src\App.tsx", $raw, [System.Text.Encoding]::UTF8)
