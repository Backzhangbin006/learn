// sort算法对无序数组进行排序并找出第k大的值

function findKthLargest (nums, k) {
  if(k < 0 || k > nums.length - 1) return NaN
  return nums.sort((a, b) => b - a)[k - 1]
}
console.log(findKthLargest([2,5,7,6,4,9],2));