import { Api } from "../api";
import { Type } from "../type";
import { ArrayMethod } from "./array-method";
import { ArrayProperty } from "./array-property";

const PIPE = ' | ';
describe('Array', () => {
  
  Api({type : Type.Array.toString(), property : ArrayProperty.length.toString()})
  it('should give length of array', () => {
    const patientIds : number[] = [1,2,3];
    expect(patientIds.length).toBe(3);
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.push.toString()})
  it('should add single new element at the end of the array', () => {
    const patientIds : number[] = [1,2];
    patientIds.push(3);
    patientIds.push(4);
    expect(patientIds.length).toBe(4);
    expect(patientIds[0]).toBe(1);
    expect(patientIds[1]).toBe(2);
    expect(patientIds[2]).toBe(3);
    expect(patientIds[3]).toBe(4);
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.push.toString()})
  it('should add multiple new elements at the end of the array using sinle push method', () => {
    const patientIds : number[] = [1,2];
    patientIds.push(3,4);
    expect(patientIds.length).toBe(4);
    expect(patientIds[0]).toBe(1);
    expect(patientIds[1]).toBe(2);
    expect(patientIds[2]).toBe(3);
    expect(patientIds[3]).toBe(4);
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.push.toString()})
  it('should return new length of array when add new element in the existing array', () => {
    const patientIds : number[] = [1,2];
    const newLengthOrPatientIdsArray = patientIds.push(3, 4);
    expect(newLengthOrPatientIdsArray).toBe(4);
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.join.toString()})
  it('should join all email ids with pipe seperated from emaiil ids array', () => {
    const emailIds : string[] = ['abc@xyz.com', 'def@xyz.com', 'ghi@xyz.com'];
    const emailIdsCommaSeperated = emailIds.join(PIPE);
    expect(emailIdsCommaSeperated).toBe('abc@xyz.com | def@xyz.com | ghi@xyz.com');
  });

});
