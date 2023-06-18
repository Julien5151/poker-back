type EntityId = string;

export abstract class CrudService<T extends { id: EntityId }> {
  protected entities = new Map<EntityId, T>();

  public abstract new(...args: any[]): T;

  protected set(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  public get(id: EntityId): T | undefined {
    return this.entities.get(id);
  }

  public update(id: EntityId, entityUpdate: Partial<T>): T {
    const updatedEntity: T = {
      ...this.get(id),
      ...entityUpdate,
    };
    this.entities.set(id, updatedEntity);
    return updatedEntity;
  }

  public delete(id: EntityId): boolean {
    return this.entities.delete(id);
  }
}
