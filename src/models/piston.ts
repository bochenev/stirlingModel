
// Поршень
export interface Piston {
    material?: string;
    heatCapacity?: number;          //  теплоемкость, J/K (Дж/К)
    specificHeatCapacity: number;   //  удельная теплоемкомть, J / kg*K (Дж / кг*К)
    diameter: number;               //  Диаметр, m (м)
    thickness: number;              // Толщина, m (м)
}
