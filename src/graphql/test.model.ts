import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class TestModel {
	@Field()
	hello: string
}
