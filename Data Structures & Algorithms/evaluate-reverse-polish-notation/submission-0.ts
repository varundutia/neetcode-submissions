class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const st: number[] = [];

        for (const i of tokens) {

            if (i === "+") {

                const op1 = st.pop() as number;

                const op2 = st.pop() as number;

                st.push(op2 + op1);

            } else if (i === "-") {

                const op1 = st.pop() as number;

                const op2 = st.pop() as number;

                st.push(op2 - op1);

            } else if (i === "*") {

                const op1 = st.pop() as number;

                const op2 = st.pop() as number;

                st.push(op2 * op1);

            } else if (i === "/") {

                const op1 = st.pop() as number;

                const op2 = st.pop() as number;

                st.push(Math.trunc(op2 / op1));

            } else {

                st.push(Number(i));

            }

        }

        return st[st.length - 1];

    }
}
