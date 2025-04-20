function generateName() {
    const maleNames = ["Kwasi", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = parseInt(document.getElementById("day")?.value);
    const month = parseInt(document.getElementById("month")?.value);
    const year = parseInt(document.getElementById("year")?.value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const output = document.getElementById("output");

    if (!day || !month || !year || !gender) {
        output.innerText = "Please fill in all fields correctly.";
        return;
    }

    const birthDate = new Date(year, month - 1, day);

    if (birthDate.getDate() !== day || birthDate.getMonth() !== (month - 1)) {
        output.innerText = "Invalid date. Please check your inputs.";
        return;
    }

    const dayOfWeek = birthDate.getDay();
    const dayName = days[dayOfWeek];
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    output.innerHTML = `You were born on a <strong>${dayName}</strong>. Your Akan name is <strong>${akanName}</strong>!`;
}
