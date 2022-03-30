export function capitalize([ first, ...rest ]) {
  return [ first.toUpperCase(), ...rest ].join('');
}
