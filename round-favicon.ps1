Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("public/logo.png")
$size = [math]::Min($img.Width, $img.Height)
$bmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.Clear([System.Drawing.Color]::Transparent)

# Create a circle path
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $size, $size)
$g.SetClip($path)

# Draw image centered
$x = ($size - $img.Width) / 2
$y = ($size - $img.Height) / 2
$g.DrawImage($img, $x, $y, $img.Width, $img.Height)

$bmp.Save("public/favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save("public/favicon.ico", [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()
