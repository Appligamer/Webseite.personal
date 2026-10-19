#!/bin/bash
# Jacob Glathe & Team — Auto Sync & Xcode Launcher for macOS
set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=========================================================="
echo "  Jacob Glathe & Team — Synchronisiere mit GitHub..."
echo "=========================================================="

cd "$PROJECT_DIR"
git fetch origin main
git reset --hard origin/main

echo "Projekt erfolgreich auf den neuesten Stand aktualisiert!"
echo "Starte Apple Xcode..."

open "$PROJECT_DIR/xcode/JacobGlatheApp/JacobGlatheApp.xcodeproj"
