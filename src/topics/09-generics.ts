export function whatsMyType<T>(argument: T): T{ //La T quiere decir que es generico el argumento y q depende del tipo de se envie, es T, pero podria ser cualquier letra, pero se suele usar T
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));






