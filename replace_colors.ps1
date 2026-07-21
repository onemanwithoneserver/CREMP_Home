$folderPath = "C:\Users\mlmma\OneDrive\Documents\GitHub\CREMP_Home\src\Investors"
$files = Get-ChildItem -Path $folderPath -Recurse -File -Include *.tsx

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Replace the colors
    $newContent = $content -replace '#1E6B4F', '#B27F1C' `
                           -replace '#34D399', '#F6B23B' `
                           -replace '#2d9d75', '#d49924' `
                           -replace '#10b981', '#d49924' `
                           -replace '#86efac', '#f9d08b' `
                           -replace '#163a2c', '#2d2008'

    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($file.Name)"
    }
}
