{
  // Conditional Type
  type a1 = null;
  type b1 = undefined;

  type X = a1 extends null ? true : false;
  type Y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type hasBike = CheckVehicle<"car">;
  type hasTractor = CheckVehicle<"any">;
  type hasPlane = CheckVehicle<"plane">;
}
