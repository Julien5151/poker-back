type EntityId = string;

export abstract class CrudService<T extends { id: EntityId }> {
  private entities = new Map<EntityId, T>();

  protected abstract new(...args: any[]): T;

  protected create(): T {
    const newEntity = this.new();
    this.entities.set(newEntity.id, newEntity);
    return newEntity;
  }

  protected get(id: EntityId): T {
    return this.entities.get(id);
  }

  protected update(id: EntityId, entityUpdate: Partial<T>): T {
    const updatedEntity: T = {
      ...this.get(id),
      ...entityUpdate,
    };
    this.entities.set(id, updatedEntity);
    return updatedEntity;
  }

  protected delete(id: EntityId): boolean {
    return this.entities.delete(id);
  }
}
