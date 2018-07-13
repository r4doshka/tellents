Tellents = window.Tellents || {};
Tellents.data = Tellents.data || {};

Tellents.data.teams = {

    init: function() {
        this.initProfilePage();
        this.initHomePage();
    },

    // PROFILE PAGE ==>

    initProfilePage: function () {
    	
        this.initToggleJobsItems();
        this.initJobFinishContentToggle();
        this.initBidInfoToggle();    
        this.initMobileMenuToggle();  
        this.initMySelectBox();
        this.initDialogStatusToggle();
        this.initDialogItemActiveToggle();
        this.initConversationOpen();
        this.initConvMessagesOpen();
        this.initDropdownBlockToggle();
        this.initSkillsStepToggle();
        this.initAddNewSkillsCatBlockOpen();
        this.initJobPriceToggler();
        this.initBidItemHeightAfterResize();
        this.initInvoiceTabSwircher();
    },

    initToggleJobsItems: function() {
		var jobItems = $( ".job-item" ),
			jobItemTitle = $( ".job-item-title, .job-status"),
			postJobBtn = $(".post-job-block"),
            self = this;

		jobItemTitle.on('click', function(){
			var targetJob = $(this).closest('.job-item');
			targetJob.toggleClass('open');
			targetJob.next('.job-item-content').toggle();
			if($('.job-item.open').length > 0) {
				postJobBtn.show();
			} else {
				postJobBtn.hide();
			}
            self.initBidItemMaxHeightSet(); 
		});

    },

    initJobFinishContentToggle: function(){
    	var finishBtn = $('.job-finish-btn'),
    		finishBackBtn = $('.job-finish-back-btn');

    	finishBtn.on('click', function(){
    		var targetJobItem = $(this).closest('.job-item-content');
    		targetJobItem.addClass('job-finish-content');
    	});

    	finishBackBtn.on('click', function(){
    		var targetJobItem = $(this).closest('.job-item-content');
    		targetJobItem.removeClass('job-finish-content');
    	})
    },

    initBidInfoToggle: function(){
        // var target = $('.bid-info-content').find('.work-descr'),
        var target = $('.bid-info-content'),
            bidItems = $('.job-bid-item');
        target.on('click', function(){
            var targetBidItem = $(this).closest('.job-bid-item');
            if(targetBidItem.hasClass('open')){
                targetBidItem.toggleClass('open');
            } else {
                bidItems.removeClass('open');
                targetBidItem.toggleClass('open');
            }
            
        });
    },

    initBidItemMaxHeightSet: function(){
        var targetItemContent = $('.bid-info-content');
        $.each(targetItemContent, function(){
            var height = $(this).outerHeight(),
                thisParent = $(this).closest('.bid-info-right-panel');

            console.log(height);

            thisParent.height(height);
        })
        
    },

    initBidItemHeightAfterResize: function(){
        var self = this;
        $(window).resize(function(){
          self.initBidItemMaxHeightSet();
        });
    },

    initMobileMenuToggle: function(){
        var mainNav = $('.main-top-nav'),
            toggleBtn = mainNav.find('.humburger-icon'),
            toggleMenuLi = mainNav.find('.nav-list').find('li'),
            rightColHack = $('.right-col');

        toggleBtn.on('click', function(){
            mainNav.toggleClass('menu-open');
            rightColHack.toggleClass('menu-open');
        });

        toggleMenuLi.on('click', function(){
            if(mainNav.hasClass('menu-open')){
                mainNav.toggleClass('menu-open');
                rightColHack.toggleClass('menu-open');
            }
        })
    },

    initMySelectBox: function(){
        var selectBox = $('.my-select-box'),
            selectBoxToggler = selectBox.find('.my-select-result'),
            radio = selectBox.find('.radio').find('label');

        selectBoxToggler.on('click', function(){
            var thisSelectBox = $(this).closest('.my-select-box'),
                thisRadio = thisSelectBox.find('.radio input');
            thisSelectBox.toggleClass('open');
        });

        radio.on('click', function(){
            var thisSelectBox = $(this).closest('.my-select-box'),
                thisSelecBoxResult = thisSelectBox.find('.my-select-result').find(".text");

            if(thisSelectBox.hasClass('open')){
                var text = $(this).find('.radio-text').text();
                thisSelecBoxResult.text(text);
                thisSelectBox.toggleClass('open');
            }

        })
    },

    initDialogItemActiveToggle: function(){
        var target = $('.dialog-item');
        target.on('click', function(){
            target.removeClass('active');
            $(this).toggleClass('active');
        });
    },

    initConversationOpen: function(){
        var target = $('.dialog-item'),
            wrapper = $('.communication');
        target.on('click', function(){
            if(wrapper.hasClass('conversation-open')) {
                return false;
            } else {
                if(wrapper.hasClass('messages-open')) {
                    wrapper.removeClass('messages-open');
                }
                wrapper.addClass('conversation-open')
            }
        });
    },

    initConvMessagesOpen: function(){
        var wrapper = $('.communication'),
            subWrapper = $('.conversation'),
            target = subWrapper.find('.communication-item');
        target.on('click', function(){
            if(wrapper.hasClass('messages-open')) {
                return false;
            } else {
                if(wrapper.hasClass('conversation-open')) {
                    wrapper.removeClass('conversation-open');
                }
                wrapper.addClass('messages-open')
            }
        });
    },

    initDialogStatusToggle: function(){
        var target = $('.dialog-status');
        target.on('click', function(){
            $(this).toggleClass('stared');
        })
    },

    initDropdownBlockToggle: function() {
        var tardetBtn = $('.dropdown-toggle-btn');            

        tardetBtn.click('on', function(){
            targetFilesBlock = $(this).closest('.dropdown-block');
            targetFilesBlock.toggleClass('opened');
        });
    },

    initSkillsStepToggle: function(){
        var stepToggler = $('.step-toggler'),
            targetWrapper = $('#skills');

        stepToggler.on('click', function(){
            if($(this).hasClass('step-1-toggler')) {
                if(targetWrapper.hasClass('step-2-open')) {
                    targetWrapper.removeClass('step-2-open');
                }
                if(targetWrapper.hasClass('step-3-open')) {
                    targetWrapper.removeClass('step-3-open');
                }
                targetWrapper.addClass('step-1-open');
            }
            if($(this).hasClass('step-2-toggler')) {
                if(targetWrapper.hasClass('step-1-open')) {
                    targetWrapper.removeClass('step-1-open');
                }
                if(targetWrapper.hasClass('step-3-open')) {
                    targetWrapper.removeClass('step-3-open');
                }
                targetWrapper.addClass('step-2-open');
            }
            if($(this).hasClass('step-3-toggler')) {
                if(targetWrapper.hasClass('step-1-open')) {
                    targetWrapper.removeClass('step-1-open');
                }
                if(targetWrapper.hasClass('step-2-open')) {
                    targetWrapper.removeClass('step-2-open');
                }
                targetWrapper.addClass('step-3-open');
            }
        });
    },

    initAddNewSkillsCatBlockOpen: function(){
        var targetBtn = $('.skills-footer').find('a'),
            newSkillCatBlock = $('.skill-subcat--new'),
            closeBtn = newSkillCatBlock.find('.add-skill-btn');

        targetBtn.on('click', function(event){
            event.preventDefault();
            if(newSkillCatBlock.hasClass('open')){
                return false;
            }
            newSkillCatBlock.addClass('open');
        });

        closeBtn.on('click', function(){
            if(newSkillCatBlock.hasClass('open')){
                newSkillCatBlock.removeClass('open');
            } else {
                return false;
            }
        })
    },

    initJobPriceToggler: function(){
        var targetBtn = $('.hourly-toggler');

        targetBtn.on('click', function(){
            $(this).closest('.job-item').toggleClass('hourly');
        });
    },

    initInvoiceTabSwircher: function(){
        var target = $('.tab-pane-switcher'),
            targetWrepper = $('#invoices');

        target.on('click', '.item', function(){
                target.find('.item').removeClass('active');
                $(this).addClass('active');
            if($(this).hasClass('item-tallents')){
                if(targetWrepper.hasClass('tallents-open')){
                    return;
                }
                if(targetWrepper.hasClass('client-open')){
                    targetWrepper.removeClass('client-open');
                    targetWrepper.addClass('tallents-open');
                }
            }
            if($(this).hasClass('item-client')){
                if(targetWrepper.hasClass('client-open')){
                    return;
                }
                if(targetWrepper.hasClass('tallents-open')){
                    targetWrepper.removeClass('tallents-open');
                    targetWrepper.addClass('client-open');
                }
            }
        });
    },




    // HOME PAGE ==>

    initHomePage: function(){
        this.initFilterSwitcher();
        this.initFilterSwitcherToggle();
        this.initFilterSwitcheToggleContent();
        this.initFilterDropdown();
        this.initJobBoxToggleOpen();
        this.initMobileFilter();
    },

    initFilterSwitcher: function(){
        var page = $('.home-page'),
            targetWrapper = page.find('.job-boxes-header').find('.left-sidebar').find('.search-filter'),
            targetSwitcher = targetWrapper.find('.radio-switcher'),
            radioInputPrev = targetSwitcher.prev('.radio').find('input'),
            radioInputNext = targetSwitcher.next('.radio').find('input');

        if(radioInputPrev.prop('checked')) {
            if(targetSwitcher.hasClass('right')){
                targetSwitcher.removeClass('right');
            }
            if(targetSwitcher.hasClass('left')){
                return false;
            }
            targetSwitcher.addClass('left');
        }
        if(radioInputNext.prop('checked')) {
            if(targetSwitcher.hasClass('left')){
                targetSwitcher.removeClass('left');
            }
            if(targetSwitcher.hasClass('right')){
               return false; 
            }
            targetSwitcher.addClass('right');
        }
    },

    initFilterSwitcherToggle: function(){
        var self = this,
            page = $('.home-page'),
            targetWrapper = page.find('.job-boxes-header').find('.left-sidebar').find('.search-filter'),
            targetSwitcher = targetWrapper.find('.radio-switcher'),
            radioWrapper = targetWrapper.find('.radio'),
            radioInputPrev = targetSwitcher.prev('.radio').find('input'),
            radioInputNext = targetSwitcher.next('.radio').find('input');

        targetSwitcher.on('click', function(){
            if(radioInputPrev.prop('checked')) {
                radioInputPrev.prop("checked", false);
                radioInputNext.prop("checked", true);

            } else if(radioInputNext.prop('checked')) {
                radioInputNext.prop("checked", false);
                radioInputPrev.prop("checked", true);
            }

            self.initFilterSwitcher();
            self.initFilterSwitcheToggleContent();
        });

        radioWrapper.on('click', function(){
            self.initFilterSwitcher();
            self.initFilterSwitcheToggleContent();
        });
    },

    initFilterSwitcheToggleContent: function(){
        var page = $('.home-page'),
            targetWrapper = page.find('.job-boxes-header').find('.left-sidebar').find('.search-filter'),
            targetSwitcher = targetWrapper.find('.radio-switcher'),
            radioInputPrev = targetSwitcher.prev('.radio').find('input'),
            radioInputNext = targetSwitcher.next('.radio').find('input'),
            mainContentWrapper = page.find('.job-boxes');

        if(radioInputPrev.prop('checked')) {
            if(mainContentWrapper.hasClass('job-boxes--talents')){
                mainContentWrapper.removeClass('job-boxes--talents');
            }
            if(mainContentWrapper.hasClass('job-boxes--jobs')){
                return false;
            }
            mainContentWrapper.addClass('job-boxes--jobs');
        }
        if(radioInputNext.prop('checked')) {
            if(mainContentWrapper.hasClass('job-boxes--jobs')){
                mainContentWrapper.removeClass('job-boxes--jobs');
            }
            if(mainContentWrapper.hasClass('job-boxes--talents')){
               return false; 
            }
            mainContentWrapper.addClass('job-boxes--talents');
        }
    },

    initFilterDropdown: function(){
        var targetDropdown = $('.filter-dropdown-block'),
            targetBtn = targetDropdown.find('.dropdown-toggle');

        targetBtn.on('click', function(){
            $(this).closest('.filter-dropdown-block').toggleClass('open');
        });
    },

    initJobBoxToggleOpen: function(){
        var page = $('.home-page'),
            target = page.find('.job-box'),
            closeBtn = target.siblings('.job-box-details').find('.close-btn');

            target.on('click', function(){
                if($(this).hasClass('open')){
                    $(this).removeClass('open');
                } else {
                    target.removeClass('open');
                    $(this).addClass('open');

                    var targetPosition = $(this).offset().left-$(this).closest('.job-boxes-wrapper').offset().left;
                    if(targetPosition < 20) {
                        $(this).addClass('left-details');
                    } else {
                        $(this).addClass('right-details');
                    }
                    
                }
                
            });

            closeBtn.on('click', function(){
                var closeBtnTarget = $(this).closest('.job-box-details').siblings('.job-box');
                if(closeBtnTarget.hasClass('open')){
                    closeBtnTarget.removeClass('open');
                }
            })
    },

    initMobileFilter: function(){
        var page = $('.home-page'),
        targetBtn = page.find('.filter-btn'),
        target = page.find('.main-content').find('.left-sidebar'),
        closeBtn = target.find('.close-btn');

        targetBtn.on('click', function(){
            target.toggleClass('visible');
        });

        closeBtn.on('click', function(){
            if(target.hasClass('visible')){
                target.removeClass('visible');
            }
        });
    }
};

$(function () {
    Tellents.data.teams.init();
});