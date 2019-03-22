
// Рабочий цилиндр
export interface Cylinder {
    material?: string;
    heatCapacity?: number;          //  теплоемкость, J/K (Дж/К)
    specificHeatCapacity: number;   //  удельная теплоемкомть, J / kg*K (Дж / кг*К)
    diameter: number;               //  Диаметр, m (м)
    wallThickness: number;          // Толщина стенок, m (м)
    height: number;                 // Высота, m (м)
}
