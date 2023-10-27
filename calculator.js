class Calculator {
    constructor(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || !isFinite(num1) || !isFinite(num2)) {
            throw new Error('Ошибка! Оба числа num1 и num2 должны быть валидными и соответсвовать условию')
        }

        this.num1 = num1;
        this.num2 = num2;

        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    setX(num1) {
        if (typeof num1 !== 'number' || !isFinite(num1)) {
            throw new Error('Ошибка! num1 должно быть валидным и соответствовать условию')
        }
        this.num1 = num1;
    }

    setY(num2) {
        if (typeof num2 !== 'number' || !isFinite(num2)) {
            throw new Error('Ошибка! num2 должно быть валидным и соответствовать условию')
        }
        this.num2 = num2;
    }

    logSum() {
        return this.num1 + this.num2;
    }

    logMul() {
        return this.num1 * this.num2;
    }

    logSub() {
        return this.num1 - this.num2;
    }

    logDiv() {
        if (this.num2 === 0) {
            throw new Error('Деление на ноль не разрешено');
        }
        return this.num1 / this.num2;
    }
}
