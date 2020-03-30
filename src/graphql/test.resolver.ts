import { Resolver, Query } from '@nestjs/graphql'
import { TestModel } from 'src/graphql/test.model'

@Resolver()
export class TestResolver {
	@Query(returns => String)
	hello (): String {
		return
	}
}
