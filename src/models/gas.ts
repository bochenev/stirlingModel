/**
 *
 * van der waals gas equation
 *
 *  ( P + alpha * N * N / (V * V))* (V - betta*N) = N * R * T;
 *  N - mols count
 *  V - volume
 */
export interface Gas {
    heatCapacity?: number;          //  теплоемкость, J/K (Дж/К)
    specificHeatCapacity: number;   //  удельная теплоемкомть, J / kg*K (Дж / кг*К)
    thermalConductivity: number;    //  коэффициент теплопроводности, J / m*s*K   (Дж /  м*с*К)
    pressure: number;               //  давление, Pa (Па)
    volume: number;                 //  объём, L (л)
    temperature: number;            //  температура, К
    molarMass: number;              //  молярная масса? kg/mol (кг/моль)
    alpha: number;                  //  alpha для уравнения Ван-Дер-Ваальса
    betta: number;                  //  betta для уравнения Ван-Дер-Ваальса
}
