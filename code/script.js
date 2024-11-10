function showSkills(type) {
    const codingSkills = document.getElementById('codingSkills');
    const languageSkills = document.getElementById('languageSkills');
    const codingButton = document.getElementById('codingButton');
    const languagesButton = document.getElementById('languagesButton');

    // Ocultem les barres i les reiniciem a 0
    const allSkillLevels = document.querySelectorAll('.skill-level');
    allSkillLevels.forEach(skill => {
        skill.style.width = '0'; // Restableix l'amplada
    });

    // Ocultem i mostrem la secció correcta
    if (type === 'coding') {
        codingSkills.classList.add('show');
        languageSkills.classList.remove('show');
        codingButton.classList.add('active');
        languagesButton.classList.remove('active');
    } else {
        languageSkills.classList.add('show');
        codingSkills.classList.remove('show');
        languagesButton.classList.add('active');
        codingButton.classList.remove('active');
    }

    // Aplicar el valor correcte a cada barra de la secció visible
    setTimeout(() => {
        const visibleSkillLevels = document.querySelectorAll('.skills-content.show .skill-level');
        visibleSkillLevels.forEach(skill => {
            // Agafem el valor original de l'atribut `width` definit a l'HTML
            const originalWidth = skill.getAttribute('data-width');
            skill.style.width = originalWidth; // Apliquem el valor original
        });
    }, 100); // Esperem un moment per assegurar la transició
}
