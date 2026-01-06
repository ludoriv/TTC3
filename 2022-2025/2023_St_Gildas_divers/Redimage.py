#from PIL import Image
#
#import os ; os.chdir("C:/Comm2025/TTC_site/Site_TTCnew/2023")
#        Dossier source contenant les images originales
#input_folder = "images_2023"
#        Dossier de sortie pour les images redimensionnées
#output_folder = "images_2023s"
#       Crée le dossier de sortie s'il n'existe pas
#os.makedirs(output_folder, exist_ok=True)
#        Taille maximale (en pixels) pour le redimensionnement
#max_size = (1000, 1000)  # Par exemple : 800x800 pixels
#        Extensions de fichiers d'image acceptées
#valid_extensions = (".jpg", ".jpeg", ".png", ".bmp", ".gif")

#        Parcours des fichiers dans le dossier source
for filename in os.listdir(input_folder):
    if filename.lower().endswith(valid_extensions):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        try:
            with Image.open(input_path) as img:
                # Redimensionner en conservant le ratio
                img.thumbnail(max_size)

                # Sauvegarde avec optimisation (JPEG : qualité ajustable)
                if filename.lower().endswith((".jpg", ".jpeg")):
                    img.save(output_path, format="JPEG", optimize=True, quality=85)
                else:
                    img.save(output_path, optimize=True)

                print(f"✅ Image redimensionnée : {filename}")
        except Exception as e:
            print(f"❌ Erreur avec {filename} : {e}")
#📝 À personnaliser
#🔁 max_size = (800, 800) : change la taille selon ton besoin.
#📂 Remplace chemin/vers/le/dossier/images et redimensionnees par les chemins exacts.
