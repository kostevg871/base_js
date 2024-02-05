function indentify<Type>(a: Type): Type {
  return a;
}
indentify<string>("1");

type GenericType<T> = {
	a: T extends string ? object : null
}

type StringType = GenericType<'kkk'>
type NumberType = GenericType<number>

