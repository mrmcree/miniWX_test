/**
 * 通信配置
 */
let request = {
  key:              'GhU6G4FK5iiyeCRoLw',
  system:           'wechat',
  version:          'v1',
  initUrl:          'https://wx.upjob.com.cn/api/v2/login/mini_login',
  job_list:         'https://wx.upjob.com.cn/api/v2/index/get_index_job_list',
  get_mobile:       'https://wx.upjob.com.cn/api/v2/login/mini_bind_mobile',
  tags_list:        'https://wx.upjob.com.cn/api/v2/public/benefits_tag_List',
  hot_search:       'https://wx.upjob.com.cn/api/v2/index/index_search',
  screen_list:      'https://wx.upjob.com.cn/api/v2/index/index_screen',
  city_list:        'https://wx.upjob.com.cn/api/v2/public/search_city_list',
  salary_range:     'https://wx.upjob.com.cn/api/v2/public/search_salary_List',
  job_type_list:    'https://wx.upjob.com.cn/api/v2/public/job_type_List',
  recruit_datails:  'https://wx.upjob.com.cn/api/v1/recruit_datails',
  company_datails:  'https://wx.upjob.com.cn/api/v1/company_datails',
  evaluate_info:    'https://wx.upjob.com.cn/api/v2/evaluate/evaluate_list_for_organ',
  is_collect:       'https://wx.upjob.com.cn/api/v1/is_collect',
  collection:       'https://wx.upjob.com.cn/api/v1/collection',
  nation_list:      'https://wx.upjob.com.cn/api/v2/public/nation_List',
  is_enroll:        'https://wx.upjob.com.cn/api/v2/register/is_enroll',
  job_details:      'https://wx.upjob.com.cn/api/v2/details/enroll_collect_info',
  education_list:   'https://wx.upjob.com.cn/api/v1/get_education_lists',
  registration:     'https://wx.upjob.com.cn/api/v2/register/wechat_registration_post',
  messages_catalog: 'https://wx.upjob.com.cn/api/v1/messages_catalog',
  messages_list:    'https://wx.upjob.com.cn/api/v1/messages_catalog_list',
  messages_detail:  'https://wx.upjob.com.cn/api/v1/message_detail',
  personal_info:    'https://wx.upjob.com.cn/api/v1/user_datails_v2'
};

module.exports = request;