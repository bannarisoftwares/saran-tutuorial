describe('Basic javascript tutuiorial', () => {

    it('Variables & Data type', () => {


        /**
         * x => Variable
         * 10 => Value
         * let =>dataType
         */

        // DataType
        // => let,const,var

        //LET => Allowed to reinitialize the value
        let x = 10;
        expect(x).toEqual(10);
        x = 20;
        expect(x).toEqual(20);

        //VAR => Allowed to reinitialize the value
        var y = 10;
        expect(y).toEqual(10);
        y = 20;
        expect(y).toEqual(20);

        //CONST => Not Allowed to reinitialize the value

        const z = 10;
        expect(z).toEqual(10);

        const arr = [3, 4, 5, 6, 6];
        expect(arr).toEqual([3, 4, 5, 6, 6]);

        const arr2 = [3, 4, 5, 6, 6];
        arr2[1] = 9999
        expect(arr).toEqual([3, 4, 5, 6, 6]);

    });

    it('value assigning to Data type', () => {
        let x = 10;
        expect(x).toEqual(10);

        let y = "Saran";
        expect(y).toEqual("Saran");

        let z = "S";
        expect(z).toEqual("S");

        let arr = [3, 4, 5, 6, 6]
        expect(arr).toEqual([3, 4, 5, 6, 6]);

        let arr2 = [3, "saran", 'd', `dccdjc jdcbje`, 6, "$"]
        expect(arr2).toEqual([3, "saran", 'd', `dccdjc jdcbje`, 6, "$"]);

    });

    it('loop in js', () => {

        let count = 0;
        const total = 4;

        for (let i = 0; i < total; i++) {
            count = count + 1;
        }

        expect(count).toEqual(4);

        count = 0;
        let k = 0;
        while (k < total) {
            count = count + 1;
            k = k + 1;
        }
        expect(count).toEqual(4);
        expect(k).toEqual(4);

    });
});
