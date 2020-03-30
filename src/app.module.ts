import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { APP_FILTER } from '@nestjs/core'
import { CatchAllFilter } from './common/filters/catch-all.filter'
import { GraphQLModule } from '@nestjs/graphql'

@Module ({
	imports: [GraphQLModule.forRoot({})],
	controllers: [AppController],
	providers: [
		AppService,
		{ provide: APP_FILTER, useClass: CatchAllFilter }
	]
})
export class AppModule {}
