class student {
    constructor(name, secondName, dateOfBirth) {
        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.grades = []
        this.presents = []
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade)
        } else {
            return
        }
    }

    getAge() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const age = currentYear - this.dateOfBirth;

        console.log(`Учню ${age} рокiв`)
    }

    getAverageGrade() {
    console.log(`Середнiй бал учня - ${this.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.grades.length} баллiв`)
    }

    present() {
        if (this.presents.length < 25) {
            this.presents.push(true)
        } else {
            return
        }
    }

    absent() {
         if (this.presents.length <= 25) {
            this.presents.push(false)
        } else {
            return
        }
     }

    summary() {
        const averageGrade = this.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.grades.length
        
         const attendanceRate = this.presents.filter(present => present === true).length / this.presents.length;

        // Логика для вывода сообщения на основе среднего балла и посещаемости
        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade >= 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

let alex = new student('Alex', 'Habowski', 2004)

alex.present()
alex.present()
alex.present()
alex.addGrade(100)
alex.addGrade(100)
alex.addGrade(100)

console.log(alex)

alex.getAverageGrade()
alex.getAge()
console.log(alex.summary())

let sasha = new student('Sahsa', 'Dub', 2007)

sasha.present()
sasha.present()
sasha.absent()
sasha.absent()
sasha.absent()
sasha.addGrade(30)
sasha.addGrade(100)
sasha.addGrade(70)

console.log(sasha)

sasha.getAverageGrade()
sasha.getAge()
console.log(sasha.summary())