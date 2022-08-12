<?php
/*
Скрипт подключается в методе Application::initPlugins() и позволяет плагину встроить себя в интерфейс Back Office, зарегистрировать фильтр вывода и т.д.
*/

// Подключаем каталог с переводами модуля
$t = $this->getTranslator();
$t->addTranslation(__DIR__.'/lang');

	
// Добавим группу пользователей
$this->addUserGroup(array(
	'id'      => -9999,
	'name'    => 'Пользователи SKELETON',
	'describ' => 'Имеют доступ в панель управления SKELETON',
));

// Для пользователей этой группы добавим наш плагин в меню
if ($this->getBo() && $this->getUser() && $this->getUser()->hasRight(-9999) ) {

    $this->getBo()->addModule(array(
    	'id'	     => 'dummy',
    	'position' => MENU_PLUGINS,
        'name' 	   => 'Dummy plugin',
        'icon'     => '/cms/plugins/cetera-labs.plugin-dummy/images/icon.gif',
        'class'    => 'Plugin.cetera-labs.plugin-dummy.Panel'
    ));

}