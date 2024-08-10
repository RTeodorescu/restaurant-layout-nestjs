import { ShapeEntity } from "./shapes.entity";
import { Shape, ShapeOptions } from "./shapes";

/**
 * Converts a @type {Shape} object to a @type {ShapeEntity} object
 * @param shape - The data of the shape
 * @returns A @type {ShapeEntity} object
 */
export function convertShapeToShapeEntity(shape: Shape): ShapeEntity {
    if (shape == null) {
        return null
    }

    let shapeEntity: ShapeEntity = new ShapeEntity();
    shapeEntity.id = shape.id;
    shapeEntity.uuid = shape.uuid;
    shapeEntity.layoutName = shape.layoutName;
    shapeEntity.label = shape.label;
    shapeEntity.section = shape.section;
    shapeEntity.customType = shape.customType;
    shapeEntity.top = shape.shape.top;
    shapeEntity.left = shape.shape.left;
    shapeEntity.height = shape.shape.height;
    shapeEntity.width = shape.shape.width
    shapeEntity.rx = shape.shape.rx;
    shapeEntity.ry = shape.shape.ry;
    shapeEntity.createdDate = shape.createdDate;
    shapeEntity.updatedDate = shape.updatedDate;

    return shapeEntity;
}

/**
 * Converts a @type {ShapeEntity} object to a @type {Shape} object
 * @param shapeEntity - The data of the shapeEntity
 * @returns A @type {Shape} object
 */
export function convertShapeEntityToShape(shapeEntity: ShapeEntity): Shape {
    if (shapeEntity == null) {
        return null
    }

    let shape: Shape = new Shape();
    shape.id = shapeEntity.id;
    shape.uuid = shapeEntity.uuid;
    shape.layoutName = shapeEntity.layoutName;
    shape.label = shapeEntity.label;
    shape.section = shapeEntity.section;
    shape.customType = shapeEntity.customType;

    shape.shape = new ShapeOptions();
    shape.shape.top = shapeEntity.top;
    shape.shape.left = shapeEntity.left;
    shape.shape.height = shapeEntity.height;
    shape.shape.width = shapeEntity.width
    shape.shape.rx = shapeEntity.rx;
    shape.shape.ry = shapeEntity.ry;

    shape.createdDate = shapeEntity.createdDate;
    shape.updatedDate = shapeEntity.updatedDate;

    return shape;
}

/**
 * Converts a @type {Shape} object to a @type {ShapeEntity} object
 * @param shape - The data of the shape
 * @returns A @type {ShapeEntity} object
 */
export function convertShapeToShapeEntityPartial(shape: Partial<Shape>): ShapeEntity {
    if (shape == null) {
        return null
    }

    let shapeEntity: ShapeEntity = new ShapeEntity();
    shapeEntity.id = shape.id;
    shapeEntity.uuid = shape.uuid;
    shapeEntity.layoutName = shape.layoutName;
    shapeEntity.label = shape.label;
    shapeEntity.section = shape.section;
    shapeEntity.customType = shape.customType;
    shapeEntity.top = shape.shape.top;
    shapeEntity.left = shape.shape.left;
    shapeEntity.height = shape.shape.height;
    shapeEntity.width = shape.shape.width
    shapeEntity.rx = shape.shape.rx;
    shapeEntity.ry = shape.shape.ry;
    shapeEntity.createdDate = shape.createdDate;
    shapeEntity.updatedDate = shape.updatedDate;

    return shapeEntity;
}

/**
 * Converts a @type {ShapeEntity} object to a @type {Shape} object
 * @param shapeEntity - The data of the shapeEntity
 * @returns A @type {Shape} object
 */
export function convertShapeEntityToShapePartial(shapeEntity: Partial<ShapeEntity>): Shape {
    if (shapeEntity == null) {
        return null
    }

    let shape: Shape = new Shape();
    shape.id = shapeEntity.id;
    shape.uuid = shapeEntity.uuid;
    shape.layoutName = shapeEntity.layoutName;
    shape.label = shapeEntity.label;
    shape.section = shapeEntity.section;
    shape.customType = shapeEntity.customType;

    shape.shape = new ShapeOptions();
    shape.shape.top = shapeEntity.top;
    shape.shape.left = shapeEntity.left;
    shape.shape.height = shapeEntity.height;
    shape.shape.width = shapeEntity.width
    shape.shape.rx = shapeEntity.rx;
    shape.shape.ry = shapeEntity.ry;

    shape.createdDate = shapeEntity.createdDate;
    shape.updatedDate = shapeEntity.updatedDate;

    return shape;
}