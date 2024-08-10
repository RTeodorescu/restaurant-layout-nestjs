/**
 * A Shape class used at the API level
 * This type should not be used directly in the TypeORM for database changes
 */
export class Shape {
    id: number;
    uuid: string;
    layoutName: string;
    label: string;
    section: string;
    customType: string;
    shape: ShapeOptions;
    createdDate: Date;
    updatedDate: Date;
}

/**
 * A ShapeOptions class used at the API level
 * This type should not be used directly in the TypeORM for database changes
 */
export class ShapeOptions {
    top: number;
    left: number;
    height: number;
    width: number;
    rx: number;
    ry: number;
}