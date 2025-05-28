import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const sizes = [16, 32, 192, 512];
const inputIcon = path.join(process.cwd(), 'public', 'logo.png');
const outputDir = path.join(process.cwd(), 'public');

async function generateIcons() {
  try {
    // Verificar si existe el ícono de entrada
    if (!fs.existsSync(inputIcon)) {
      console.error('❌ No se encontró el archivo logo.png en la carpeta public');
      console.log('📝 Por favor, coloca tu logo en formato PNG en: public/logo.png');
      return;
    }

    // Crear directorio de salida si no existe
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generar íconos para cada tamaño
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `icon-${size}.png`);
      await sharp(inputIcon)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      console.log(`✅ Generado: icon-${size}.png`);
    }

    // Generar favicon.ico (16x16)
    await sharp(inputIcon)
      .resize(16, 16)
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('✅ Generado: favicon.ico');

    // Generar apple-touch-icon (180x180)
    await sharp(inputIcon)
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    console.log('✅ Generado: apple-touch-icon.png');

    console.log('\n✨ ¡Íconos generados exitosamente!');
  } catch (error) {
    console.error('❌ Error al generar los íconos:', error);
  }
}

generateIcons(); 