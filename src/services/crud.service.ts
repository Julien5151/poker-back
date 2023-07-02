type EntityId = string;

export abstract class CrudService<
  // TO DO : REWORK TO CHECK IT HAS EITHER ONE OR THE OTHER BUT NOT BOTH
  T extends { id?: EntityId; name?: EntityId },
> {
  protected entities = new Map<EntityId, T>();

  public abstract new(...args: any[]): T;

  protected set(entity: T): T {
    const identifier = entity.id ?? entity.name;
    this.entities.set(identifier, entity);
    return entity;
  }

  public get(id: EntityId): T | undefined {
    return this.entities.get(id);
  }

  public update(id: EntityId, entityUpdate: Partial<T>): T | undefined {
    const entity = this.get(id);
    if (!entity) return undefined;
    const updatedEntity: T = {
      ...entity,
      ...entityUpdate,
    };
    this.entities.set(id, updatedEntity);
    return updatedEntity;
  }

  public delete(id: EntityId): boolean {
    return this.entities.delete(id);
  }
}
