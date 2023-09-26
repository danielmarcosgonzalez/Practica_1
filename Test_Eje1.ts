import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {QuickSort} from "./Ejercicio1.ts";

Deno.test("Ordenar con QuickSort",()=>{
    const desordenados = [9,1,7,8,3,2,6,4,5,0];
    const result = QuickSort(desordenados);
    assertEquals(result,[0,1,2,3,4,5,6,7,8,9]);
});
