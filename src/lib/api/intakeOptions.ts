export default [
  {
    value: 0,
    display: '-- Choose --',
  },
  ...[1, 2, 3].map((value) => ({
    value,
    display: value.toString(),
  })),
];
