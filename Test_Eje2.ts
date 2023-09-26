import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {mult_3_5} from "./Ejercicio2.ts";

Deno.test("Multiplos de 3 o 5",()=>{
    const result = mult_3_5(10);
    assertEquals(result,[0,3,5,6,9,10]);
});