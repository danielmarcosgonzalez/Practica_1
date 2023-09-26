import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {ordena_return_prim} from "./Ejercicio3.ts";

Deno.test("Ordenar y devuelve el primero separado",()=>{
    const valores:Array<string> = ["hola","adios","despues","abogado","nunca"]
    const result = ordena_return_prim(valores)
    assertEquals(result,"a b o g a d o ");
});