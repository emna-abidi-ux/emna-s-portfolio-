// On attend que le formulaire soit soumis
const themeToggleBtn = document.getElementById('theme-toggle');

// 1. Vérifier si l'utilisateur a déjà une préférence enregistrée
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// 2. Écouter le clic sur le bouton
themeToggleBtn.addEventListener('click', () => {
  // Alterne la classe .dark-mode sur le body
  document.body.classList.toggle('dark-mode');
  
  // Sauvegarder la préférence dans le localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
document.getElementById('form-reservation').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    

    // 1. Récupération des données du formulaire
    const nom = document.getElementById('nom').value;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure');
    const heureTexte = heure.value;
    const personnes = document.getElementById('personnes').value;

    // 2. Injection des données dans le message de succès
    document.getElementById('client-name').innerText = nom;
    document.getElementById('client-count').innerText = personnes;
    document.getElementById('client-date').innerText = date;
    document.getElementById('client-time').innerText = heureTexte;

    // 3. Animation visuelle : Masquer le formulaire et afficher la confirmation
    document.getElementById('form-reservation').style.display = 'none';
    
    const messageConfirmation = document.getElementById('message-confirmation');
    messageConfirmation.style.display = 'block'; // Rend le message visible
});
// --- SYSTÈME DE COMMENTAIRES INTERACTIFS ---

document.getElementById('form-commentaire').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la page de sauter ou de se recharger

    // 1. Récupération des valeurs entrées par le client
    const pseudo = document.getElementById('comm-nom').value;
    const noteSelectionnee = document.getElementById('comm-note');
    const etoilesTexte = noteSelectionnee.options[noteSelectionnee.selectedIndex].text.split(' ')[0]; // Extrait juste les "⭐"
    const message = document.getElementById('comm-texte').value;

    // 2. Création de l'élément HTML de la nouvelle carte d'avis
    const nouvelleCarte = document.createElement('div');
    nouvelleCarte.className = 'comment-card';

    nouvelleCarte.innerHTML = `
        <div class="comment-meta">
            <span class="comment-author">${pseudo}</span>
            <span class="comment-stars">${etoilesTexte}</span>
        </div>
        <p class="comment-text">${message}</p>
        <span class="comment-date">À l'instant</span>
    `;

    // 3. Insertion de l'avis en haut de la liste (au-dessus des anciens)
    const listeAvis = document.getElementById('liste-commentaires');
    listeAvis.insertBefore(nouvelleCarte, listeAvis.firstChild);

    // 4. Nettoyage et réinitialisation du formulaire pour le client suivant
    document.getElementById('form-commentaire').reset();
});
document.getElementById('form-commentaire').addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. Cibler le bouton à l'intérieur du formulaire
    const bouton = this.querySelector('.btn-comment');
    
    // 2. Sauvegarder le texte d'origine du bouton
    const texteOrigine = bouton.innerHTML;
    
    // 3. Modifier le bouton pour simuler un chargement interactif
    bouton.innerHTML = '🕒 Envoi en cours...';
    bouton.style.pointerEvents = 'none'; // Désactive les clics répétitifs
    bouton.style.opacity = '0.7';

    // 4. Simuler un court délai de traitement (ex: 1 seconde) avant d'afficher l'avis
    setTimeout(() => {
        // --- (Votre code existant qui crée et insère la carte du commentaire) ---
        const pseudo = document.getElementById('comm-nom').value;
        const noteSelectionnee = document.getElementById('comm-note');
        const etoilesTexte = noteSelectionnee.options[noteSelectionnee.selectedIndex].text.split(' ')[0];
        const message = document.getElementById('comm-texte').value;

        const nouvelleCarte = document.createElement('div');
        nouvelleCarte.className = 'comment-card';
        nouvelleCarte.innerHTML = `
            <div class="comment-meta">
                <span class="comment-author">${pseudo}</span>
                <span class="comment-stars">${etoilesTexte}</span>
            </div>
            <p class="comment-text">${message}</p>
            <span class="comment-date">À l'instant</span>
        `;

        const listeAvis = document.getElementById('liste-commentaires');
        listeAvis.insertBefore(nouvelleCarte, listeAvis.firstChild);
        // -----------------------------------------------------------------------

        // 5. Remettre le bouton à son état initial après traitement
        bouton.innerHTML = '✅ Publié !';
        
        setTimeout(() => {
            bouton.innerHTML = texteOrigine;
            bouton.style.pointerEvents = 'auto';
            bouton.style.opacity = '1';
            document.getElementById('form-commentaire').reset();
        }, 1500); // Le bouton affiche "Publié !" pendant 1.5s avant de revenir à la normale

    }, 1000); // Durée du faux chargement (1 seconde)
});
