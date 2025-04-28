function fibonacci(n) {
    if (n <= 0) {
      return [];
    }
    if (n === 1) {
      return [0];
    }
    if (n === 2) {
      return [0, 1];
    }
  
    const fibSeries = fibonacci(n - 1);
    const nextNumber = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
    fibSeries.push(nextNumber);
    return fibSeries;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;