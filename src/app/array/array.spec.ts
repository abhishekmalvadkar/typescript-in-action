describe('Array', () => {
  
  it('should give length of array', () => {
    const patientIds : number[] = [1,2,3];
    expect(patientIds.length).toBe(3);
  });

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

});
