/**
 * Computes the total number of ways to choose k items from the pile of n items
 *
 * Uses an iterative approach that relies on the following multiplicative formula:
 *
 * \frac{n!}{k!(n - k)!} = \frac{n * (n - 1) * \dots * (n - k + 1)}{1 * 2 * \dots * k} =
 * \prod{i = 1}{min(k, n - k)}\frac{n + 1 - i}{i}
 *
 * The product relies on the fact that the binomial coefficients are symmetrical:
 *
 * C_n^k = C_n^{n - k}
 *
 * @param  n the size of the pile
 * @param  k the number of items to choose from the pile
 * @return   the total number of ways to choose k items from the pile of n items
 */
export function fcomb(n: number, k: number): number {

    if (k < 0 || k > n) {
        throw new RangeError(`Value of k must be in [0, ${n}], was ${k}`);
    }

    let answer = 1;

    for (let i = 0; i !== Math.min(k, n - k); ++i) {
        answer = answer * (n - i) / (i + 1);
    }

    return answer;
}
