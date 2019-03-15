const reference = 1;

export const appMargin = {
  xs: `${reference / 2}rem`,
  s: `${reference}rem`,
  m: `${reference * 2}rem`,
  l: `${reference * 3}rem`,
  xl: `${reference * 4}rem`,
};

export const appPadding = {
  xs: appMargin.xs,
  s: appMargin.s,
  m: appMargin.m,
  l: appMargin.l,
  xl: appMargin.xl,
};

export const centerWithMargin = `
  margin-left: auto;
  margin-right: auto;
`;

export const centerWithTransform = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
