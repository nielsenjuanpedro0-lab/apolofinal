$lines = Get-Content -Path "src\App.tsx" -Encoding UTF8
$newLines = @()

foreach ($line in $lines) {
    $fixedLine = $line
    
    # Fix the link tag and the weird ?
    if ($fixedLine -like "*Ver Detalles*") {
        $fixedLine = $fixedLine -replace "Ver Detalles.*", "Ver Detalles</Link>"
    }
    
    # Fix corrupted characters using broad match
    if ($fixedLine -like "*Inversi*n y Resguardo*") { $fixedLine = $fixedLine -replace "Inversi.*n y Resguardo", "Inversión y Resguardo" }
    if ($fixedLine -like "*Financiaci*n.*") { $fixedLine = $fixedLine -replace "Financiaci.*n\.", "Financiación." }
    if ($fixedLine -like "*dise*adas para el inversor*") { $fixedLine = $fixedLine -replace "dise.*adas", "diseñadas" }
    if ($fixedLine -like "*rentabilidad r*pida*") { $fixedLine = $fixedLine -replace "r.*pida", "rápida" }
    if ($fixedLine -like "*Financiaci*n directa*") { $fixedLine = $fixedLine -replace "Financiaci.*n", "Financiación" }
    if ($fixedLine -like "*Posesi*n inmediata*") { $fixedLine = $fixedLine -replace "Posesi.*n", "Posesión" }
    if ($fixedLine -like "*M*S ELEGIDO*") { $fixedLine = $fixedLine -replace "M.*S ELEGIDO", "MÁS ELEGIDO" }
    if ($fixedLine -like "*forma m*s accesible*") { $fixedLine = $fixedLine -replace "m.*s accesible", "más accesible" }
    if ($fixedLine -like "*d*lares.*") { $fixedLine = $fixedLine -replace "d.*lares", "dólares" }
    
    $newLines += $fixedLine
}

$newLines | Set-Content -Path "src\App.tsx" -Encoding UTF8
