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
    const emailIdsPipeSeperated = emailIds.join(PIPE);
    expect(emailIdsPipeSeperated).toBe('abc@xyz.com | def@xyz.com | ghi@xyz.com');
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.join.toString()})
  it('should join all email ids with comma seperated from emaiil ids array becuase default seperator of join method is comma if not passed', () => {
    const emailIds : string[] = ['abc@xyz.com', 'def@xyz.com', 'ghi@xyz.com'];
    const emailIdsCommaSeperated = emailIds.join();
    expect(emailIdsCommaSeperated).toBe('abc@xyz.com,def@xyz.com,ghi@xyz.com');
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.pop.toString()})
  it('should remove or pop the last element from array', () => {
    const patientIds : number[] = [1,2,3,4];
    const firstPoppedElemet = patientIds.pop();
    expect(firstPoppedElemet).toBe(4);
    expect(patientIds).toHaveSize(3);
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.pop.toString()})
  it('should remove or pop the last element from array and if array is empty then retuen undefined', () => {
    const patientIds : number[] = [1];
    const firstPoppedElemet = patientIds.pop();
    expect(firstPoppedElemet).toBe(1);
    expect(patientIds).toHaveSize(0);
    const poppedElement = patientIds.pop();
    expect(poppedElement).toBeUndefined();
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.concat.toString()})
  it('should combine two or more arrays and return new merged array without modifing existing arrays so it promotes immutability', () => {
    const admittedPatientIds : number[] = [1,2];
    const dischargedPatientIds : number[] = [3,4];
    const newPatientIds : number[] = [5,6];
    const allPatientIds = admittedPatientIds.concat(dischargedPatientIds, newPatientIds);
    expect(allPatientIds).toHaveSize(6);
    expect(allPatientIds[0]).toBe(1);
    expect(allPatientIds[1]).toBe(2);
    expect(allPatientIds[2]).toBe(3);
    expect(allPatientIds[3]).toBe(4);
    expect(allPatientIds[4]).toBe(5);
    expect(allPatientIds[5]).toBe(6);
  });

  Api({type : Type.Array.toString(), method : ArrayMethod.concat.toString()})
  it('should combine two or more arrays or element(s) and return new merged array without modifing existing arrays or element(s) so it promotes immutability', () => {
    const admittedPatientIds : number[] = [1,2];
    const dischargedPatientIds : number[] = [3,4];
    const newPatientIds : number[] = [5,6];
    const gameWinnerPatientId : number = 7;
    const allPatientIds = admittedPatientIds.concat(dischargedPatientIds, newPatientIds, gameWinnerPatientId);
    expect(allPatientIds).toHaveSize(7);
    expect(allPatientIds[0]).toBe(1);
    expect(allPatientIds[1]).toBe(2);
    expect(allPatientIds[2]).toBe(3);
    expect(allPatientIds[3]).toBe(4);
    expect(allPatientIds[4]).toBe(5);
    expect(allPatientIds[5]).toBe(6);
    expect(allPatientIds[6]).toBe(7);
  });

});
