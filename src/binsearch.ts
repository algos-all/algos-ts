/**
 * Assume that the array is sorted non-decreasing
 */
export function binsearch<T>(xs: T[], x: T): number | null {
    let lft = 0, rgt = xs.length;

    while (lft < rgt) {
        let mid = lft + Math.floor((rgt - lft) / 2);

        if (xs[mid] == x) {
            return mid;
        }

        if (xs[mid] < x) {
            lft = mid + 1;
        } else {
            rgt = mid;
        }
    }

    return null;
}
