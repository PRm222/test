"""Genera il QR code del menù (SVG + PNG).

Uso / Kullanım:
    pip install qrcode pillow
    python tools/make_qr.py                       # URL predefinito (GitHub Pages)
    python tools/make_qr.py https://mio-dominio.it # URL personalizzato
"""
import sys
from pathlib import Path

import qrcode
import qrcode.image.svg

DEFAULT_URL = "https://prm222.github.io/test/"
ROOT = Path(__file__).resolve().parent.parent
PURPLE = (75, 42, 123)


def main():
    url = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_URL

    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=20, border=2)
    qr.add_data(url)
    qr.make(fit=True)

    qr.make_image(fill_color=PURPLE, back_color="white").save(ROOT / "qr-menu.png")
    qr.make_image(image_factory=qrcode.image.svg.SvgPathFillImage).save(ROOT / "qr-menu.svg")

    print(f"QR -> {url}")
    print("qr-menu.png, qr-menu.svg")


if __name__ == "__main__":
    main()
