export class ArrayUtils {

  static getLastFrom(array: any[]): any | undefined {
    return array.at(-1);
  }

  static getFirstFrom(array: any[]): any | undefined {
    return array.at(0);
  }

}

