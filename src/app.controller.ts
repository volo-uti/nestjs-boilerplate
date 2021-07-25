import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 메인 앱 컨트롤러
 */
@Controller()
export class AppController {
  /**
   * 생성자
   * @param AppService
   */
  constructor(private readonly appService: AppService) {}

  /**
   * 서버 정상 동작 체크
   */
  @Get('/_ah/liveness_check')
  @HttpCode(200)
  livenessCheck() {
    return null;
  }
}
