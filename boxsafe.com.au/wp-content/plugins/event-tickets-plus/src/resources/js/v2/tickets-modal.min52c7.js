/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.tickets=tribe.tickets||{},tribe.dialogs=tribe.dialogs||{},tribe.dialogs.events=tribe.dialogs.events||{},tribe.tickets.modal={},function($,obj){const $document=$(document);obj.selectors={container:".tribe-modal__wrapper--ar",form:"#tribe-tickets__modal-form",cartForm:".tribe-modal__wrapper--ar #tribe-modal__cart",itemRemove:".tribe-tickets__tickets-item-remove",itemTotal:".tribe-tickets__tickets-item-total .tribe-amount",itemError:".tribe-tickets__attendee-tickets-item--has-error",attendeeItemRemove:".tribe-tickets__attendee-tickets-item-remove",metaForm:".tribe-modal__wrapper--ar #tribe-modal__attendee-registration",metaContainer:".tribe-tickets__attendee-tickets-container",metaContainerHasTickets:".tribe-tickets__attendee-tickets-container--has-tickets",metaItem:".tribe-tickets__attendee-tickets-item",submit:".tribe-tickets__attendee-tickets-submit",hidden:".tribe-common-a11y-hidden",validationNotice:".tribe-tickets__notice--error",ticketInCartNotice:"#tribe-tickets__notice__tickets-in-cart",noticeNonAr:".tribe-tickets__notice--non-ar",noticeNonArCount:".tribe-tickets__non-ar-count",noticeNonArSingular:".tribe-tickets__notice--non-ar-singular",noticeNonArPlural:".tribe-tickets__notice--non-ar-plural"},obj.appendARFields=function($form){$form.find(tribe.tickets.block.selectors.item).each((function(){const $cartItem=$(this);if($cartItem.is(":visible")){const ticketID=$cartItem.closest(tribe.tickets.block.selectors.item).data("ticket-id"),$ticketContainer=$cartItem.closest(obj.selectors.form).find(obj.selectors.metaContainer+'[data-ticket-id="'+ticketID+'"]');if(!$ticketContainer.length)return;const $existing=$ticketContainer.find(obj.selectors.metaItem),qty=tribe.tickets.block.getQty($cartItem);if(0>=qty)return $ticketContainer.removeClass(obj.selectors.metaContainerHasTickets.className()),void $ticketContainer.find(obj.selectors.metaItem).remove();if($existing.length>qty){const removeCount=$existing.length-qty;$ticketContainer.find(obj.selectors.metaItem+":nth-last-child( -n+"+removeCount+" )").remove()}else if($existing.length<qty){const ticketTemplate=window.wp.template("tribe-registration--"+ticketID),counter=0<$existing.length?$existing.length+1:1;$ticketContainer.addClass(obj.selectors.metaContainerHasTickets.className());for(let i=counter;i<=qty;i++){const data={attendee_id:i};$ticketContainer.append(ticketTemplate(data)),obj.maybeHydrateAttendeeBlockFromLocal($existing.length)}}}})),obj.maybeShowNonMetaNotice($form),$document.trigger("tribe-ar-fields-appended")},obj.maybeShowNonMetaNotice=function($form){let nonMetaCount=0,metaCount=0;const $cartItems=$form.find(tribe.tickets.block.selectors.item).filter((function(){return $(this).find(tribe.tickets.block.selectors.itemQuantityInput).val()>0}));if(!$cartItems.length)return;$cartItems.each((function(){const $cartItem=$(this);if(!$cartItem.is(":visible"))return;const ticketID=$cartItem.closest(tribe.tickets.block.selectors.item).data("ticket-id");$(obj.selectors.metaForm).find(obj.selectors.metaContainer+'[data-ticket-id="'+ticketID+'"]').length?metaCount+=tribe.tickets.block.getQty($cartItem):nonMetaCount+=tribe.tickets.block.getQty($cartItem)}));const $notice=$(obj.selectors.noticeNonAr),$noticeSingular=$(obj.selectors.noticeNonArSingular),$noticePlural=$(obj.selectors.noticeNonArPlural),$title=$(".tribe-tickets__attendee-tickets-title");$notice.addClass(obj.selectors.hidden.className()),0<nonMetaCount&&0<metaCount?($notice.find(obj.selectors.noticeNonArCount).text(nonMetaCount),1<nonMetaCount?$noticePlural.removeClass(obj.selectors.hidden.className()):$noticeSingular.removeClass(obj.selectors.hidden.className()),$title.show()):$title.hide()},obj.preFillTicketsBlock=function($container){$.when(tribe.tickets.data.getData(!0)).then((function(data){const tickets=data.tickets;if(tickets.length){let $eventCount=0;tickets.forEach((function(ticket){const $ticketRow=$container.find(tribe.tickets.block.selectors.item+'[data-ticket-id="'+ticket.ticket_id+'"]');if("true"===$ticketRow.attr("data-available")){const $field=$ticketRow.find(tribe.tickets.block.selectors.itemQuantityInput),$optOut=$ticketRow.find(tribe.tickets.block.selectors.itemOptOutInput+ticket.ticket_id+"--modal");$field.length&&($field.val(ticket.quantity),$field.trigger("change"),$eventCount+=ticket.quantity,1===parseInt(ticket.optout,10)&&$optOut.prop("checked","true"))}})),0<$eventCount&&$container.find(obj.selectors.ticketInCartNotice).fadeIn()}}),(function(){const $errorNotice=$container.find(obj.selectors.ticketInCartNotice);$errorNotice.removeClass("tribe-tickets__notice--barred tribe-tickets__notice--barred-left").addClass(obj.selectors.validationNotice.className()),$errorNotice.find(".tribe-tickets-notice__title").text(TribeMessages.api_error_title),$errorNotice.find(".tribe-tickets-notice__content").text(TribeMessages.connection_error),$errorNotice.fadeIn()}))},obj.preFillModalMetaForm=function(meta){if(void 0===meta||0>=meta.length)return;const $containers=$(obj.selectors.metaForm).find(obj.selectors.metaContainer);$.each(meta,(function(idx,ticket){let current=0;const $currentContainers=$containers.find(obj.selectors.metaItem).filter('[data-ticket-id="'+ticket.ticket_id+'"]');$currentContainers.length&&$.each(ticket.items,(function(indx,data){"object"==typeof data&&($.each(data,(function(index,value){const $field=$currentContainers.eq(current).find('[name*="'+index+'"]');$field.is(":radio")||$field.is(":checkbox")?$field.each((function(){const $item=$(this);value===$item.val()&&$item.prop("checked",!0)})):$field.val(value)})),current++)}))}))},obj.preFillModalCartForm=function($form){$form.find(tribe.tickets.block.selectors.item).hide();const $items=$form.closest(tribe.tickets.block.selectors.container).find(tribe.tickets.block.selectors.item);$.each($items,(function(index,item){const $blockItem=$(item),$item=$form.find('[data-ticket-id="'+$blockItem.attr("data-ticket-id")+'"]');if($item){0<$blockItem.find(tribe.tickets.block.selectors.itemQuantityInput).val()&&$item.fadeIn()}})),obj.appendARFields($form)},obj.initModalFormPreFills=function($form){const $ticketBlock=$form.closest(tribe.tickets.block.selectors.container),postId=$form.data("post-id");tribe.tickets.loader.show($form),$.when(tribe.tickets.data.getData(!1,postId)).then((function(data){const $modalForm=$ticketBlock.find(obj.selectors.cartForm);obj.preFillModalCartForm($modalForm),data.meta&&$.each(data.meta,(function(ticket){$ticketBlock.find('[data-ticket-id="'+ticket.ticket_id+'"]').length&&obj.preFillModalMetaForm(data.meta)}));const local=tribe.tickets.data.getLocal();local.meta&&obj.preFillModalMetaForm(local.meta),window.setTimeout(tribe.tickets.loader.hide,500,$form)})),tribe.tickets.loader.hide($form)},obj.maybeHydrateAttendeeBlockFromLocal=function(length){$.when(tribe.tickets.data.getData()).then((function(data){if(!data.meta)return;const cartSkip=data.meta.length;if(length<cartSkip)return void obj.preFillModalMetaForm(data.meta);const $newBlocks=$(obj.selectors.metaForm).find(obj.selectors.metaItem).slice(length-1);$newBlocks&&$newBlocks.find(tribe.tickets.meta.selectors.formFieldInput).each((function(){const $this=$(this),name=$this.attr("name"),storedVal=data[name];storedVal&&$this.val(storedVal)}))}))},obj.bindDocumentKeypress=function(){$document.on("keypress",obj.selectors.form,(function(e){if(13===e.keyCode){const $form=$(e.target).closest(obj.selectors.form);if("undefined"===$form)return;e.preventDefault(),e.stopPropagation(),$form.find('[name="cart-button"]').click()}}))},obj.unbindModalFormClick=function($form){$form.off("click",obj.selectors.attendeeItemRemove)},obj.bindModalFormClick=function($form){$form.on("click",obj.selectors.attendeeItemRemove,(function(){const $metaItem=$(this).closest(obj.selectors.metaItem),$closeForm=$metaItem.closest(obj.selectors.form),ticketID=$metaItem.data("ticket-id"),$ticketContainer=$closeForm.find(obj.selectors.metaContainer+'[data-ticket-id="'+ticketID+'"]');if($metaItem.is(":last-child"))$metaItem.remove();else{const $metaItems=$ticketContainer.find(obj.selectors.metaItem);let found=!1;$metaItems.each((function(index,item){if(!found)return void($metaItem.is(item)&&(found=!0,$(item).remove()));const $item=$(item),data={attendee_id:index},ticketTemplate=window.wp.template("tribe-registration--"+ticketID),$newItem=$(ticketTemplate(data));$newItem.insertBefore($item);const $itemFields=$item.find("input, select");$newItem.find("input, select").each((function(indx,input){const $itemField=$($itemFields[indx]);switch($(input).attr("type")){case"radio":case"checkbox":$(input).prop("checked",$itemField.prop("checked"));break;default:$(input).val($itemField.val())}})),$item.remove()}))}$ticketContainer.find(obj.selectors.metaItem).length||$closeForm.find(tribe.tickets.block.selectors.item+'[data-ticket-id="'+ticketID+'"] '+obj.selectors.itemRemove).trigger("click");$closeForm.find(tribe.tickets.block.selectors.item+'[data-ticket-id="'+ticketID+'"] '+tribe.tickets.block.selectors.itemQuantityRemove).trigger("click")}))},obj.unbindModalSubmit=function($container){$container.find(obj.selectors.submit).off()},obj.bindModalSubmit=function($container){const $submitButton=$container.find(obj.selectors.submit),postId=$container.data("post-id");$submitButton.on("click",(function(e){e.preventDefault();const $button=$(this),$form=$(obj.selectors.form),$metaForm=$(obj.selectors.metaForm),$metaFormItems=$metaForm.find(obj.selectors.metaItem),isValidForm=tribe.tickets.meta.validateForm($metaForm),$errorNotice=$(obj.selectors.validationNotice),buttonText=$button.attr("name"),provider=$form.data("provider");if(tribe.tickets.loader.show($form),!1===$document.triggerHandler("isValidForm.eventTicketsModal",[$form]))return tribe.tickets.loader.hide($form),!1;if(!isValidForm[0])return $errorNotice.find(".tribe-tickets-notice__title").text(TribeMessages.validation_error_title),$errorNotice.find("p").html(TribeMessages.validation_error),$(obj.selectors.validationNotice+"__count").text(isValidForm[1]),$errorNotice.show(),tribe.tickets.loader.hide($form),document.getElementById("tribe-tickets__notice-modal-attendee").scrollIntoView({behavior:"smooth",block:"start"}),!1;$errorNotice.hide();let action=TribeTicketsURLs.checkout[provider];-1!==buttonText.indexOf("cart")&&(action=TribeTicketsURLs.cart[provider]),$(obj.selectors.form).attr("action",action);const params={tribe_tickets_provider:tribe.tickets.block.commerceSelector[provider],tribe_tickets_tickets:tribe.tickets.block.getTicketsForCart($form),tribe_tickets_meta:tribe.tickets.data.getMetaForSave($metaFormItems),tribe_tickets_post_id:postId};$container.find('[name="tribe_tickets_ar_data"]').val(JSON.stringify(params)),window.tribe.tickets.modal_redirect=!0,tribe.tickets.data.clearLocal(),$form.submit()}))},obj.unbindModalItemRemove=function($container){$container.find(obj.selectors.itemRemove).off()},obj.bindModalItemRemove=function($container){$container.find(obj.selectors.itemRemove).on("click",(function(e){e.preventDefault();const ticket={},$cart=$(this).closest("form"),$cartItem=$(this).closest(tribe.tickets.block.selectors.item);$cartItem.find(tribe.tickets.block.selectors.itemQuantity).val(0),$cartItem.fadeOut(),ticket.id=$cartItem.data("ticketId"),ticket.qty=0,$cartItem.find(obj.selectors.itemQuantityInput).val(ticket.qty),ticket.price=tribe.tickets.block.getPrice($cartItem),obj.updateItemTotal(ticket.qty,ticket.price,$cartItem),$(obj.selectors.metaContainer+'[data-ticket-id="'+ticket.id+'"]').removeClass(obj.selectors.metaContainerHasTickets.className()).find(obj.selectors.metaItem).remove(),window.setTimeout(obj.maybeShowNonMetaNotice,500,$cart),window.setTimeout((function(){const $items=$cart.find(tribe.tickets.block.selectors.item).filter(":visible");if(tribe.tickets.block.updateFormTotals($cart),obj.maybeShowNonMetaNotice($cart),0>=$items.length){const id=$(tribe.tickets.block.selectors.blockSubmit).attr("data-content"),result="dialog_obj_"+id.substring(id.lastIndexOf("-")+1);window[result].hide(),tribe.tickets.utils.disable($(tribe.tickets.block.selectors.submit),!1)}}),500)}))},obj.updateItem=function(id,$modalCartItem,$blockCartItem){const item={};if(item.id=id,$blockCartItem){item.qty=tribe.tickets.block.getQty($blockCartItem),item.price=tribe.tickets.block.getPrice($modalCartItem),$modalCartItem.find(tribe.tickets.block.selectors.itemQuantityInput).val(item.qty).trigger("change");const optOutSelector=tribe.tickets.block.selectors.itemOptOutInput+$blockCartItem.data("ticket-id"),optOutSelectorModal=tribe.tickets.block.selectors.itemOptOutInput+$blockCartItem.data("ticket-id")+"--modal";item.$optOut=$(optOutSelector);const $optOutInput=$(optOutSelectorModal);item.$optOut.length&&item.$optOut.is(":checked")?$optOutInput.val("1").prop("checked",!0):$optOutInput.val("0").prop("checked",!1)}else item.qty=tribe.tickets.block.getQty($modalCartItem),item.price=tribe.tickets.block.getPrice($modalCartItem);return obj.updateItemTotal(item.qty,item.price,$modalCartItem),item},obj.updateItemTotal=function(qty,price,$cartItem){const $form=$cartItem.closest("form"),provider=tribe.tickets.block.getTicketsBlockProvider($form),format=tribe.tickets.utils.getCurrencyFormatting(provider),totalForItem=(qty*price).toFixed(format.number_of_decimals);return $cartItem.find(obj.selectors.itemTotal).text(tribe.tickets.utils.numberFormat(totalForItem,provider)),totalForItem},obj.initPreFill=function($container){obj.preFillTicketsBlock($container)},obj.bindAfterUpdateFormTotals=function(event,$form){obj.appendARFields($form)},obj.bindModalQuantityChange=function(event,$input){if($input.closest(obj.selectors.cartForm).length){const $item=$input.closest(tribe.tickets.block.selectors.item);obj.updateItemTotal(tribe.tickets.block.getQty($item),tribe.tickets.block.getPrice($item),$item)}},obj.bindBeforeTicketsSubmit=function(event,$form,params){$form.find("#tribe_tickets_block_ar_data").val(JSON.stringify(params))},obj.bindModalClose=function(){$(tribe.dialogs.events).on("tribe_dialog_close_ar_modal",(function(e,dialogEl){const $modal=$(dialogEl),$form=$modal.find(obj.selectors.form),postId=$form.data("post-id"),$modalCart=$modal.find(obj.selectors.cartForm);tribe.tickets.data.storeLocal(postId),tribe.tickets.block.unbindTicketsAddRemove($modalCart),tribe.tickets.block.unbindTicketsQuantityInput($modalCart),tribe.tickets.block.unbindDescriptionToggle($modalCart),obj.unbindOptOutChange($form),obj.unbindModalSubmit($form),obj.unbindModalItemRemove($form),obj.unbindModalFormClick($form)}))},obj.bindModalOpen=function(){$(tribe.dialogs.events).on("tribe_dialog_show_ar_modal",(function(e,dialogEl){const $modal=$(dialogEl),$form=$modal.find(obj.selectors.form),$modalCart=$modal.find(obj.selectors.cartForm),$cartItems=$document.find(tribe.tickets.block.selectors.form).filter('[data-post-id="'+$form.data("postId")+'"]').find(tribe.tickets.block.selectors.item);tribe.tickets.loader.show($form),$cartItems.each((function(){const $blockCartItem=$(this),id=$blockCartItem.data("ticket-id"),$modalCartItem=$modalCart.find('[data-ticket-id="'+id+'"]');0!==$modalCartItem.length&&0!==$blockCartItem.length&&obj.updateItem(id,$modalCartItem,$blockCartItem)})),tribe.tickets.block.bindTicketsAddRemove($modalCart),tribe.tickets.block.bindTicketsQuantityInput($modalCart),tribe.tickets.block.bindDescriptionToggle($modalCart),obj.bindModalSubmit($form),obj.bindModalItemRemove($form),obj.initModalFormPreFills($form),tribe.tickets.block.updateFormTotals($modalCart),obj.bindOptOutChange($form),obj.bindModalFormClick($form),tribe.tickets.loader.hide($form)}))},obj.bindAfterSetupTicketsBlock=function(event,$container){TribeTicketOptions.ajax_preload_ticket_form&&(tribe.tickets.loader.show($container),obj.initPreFill($container))},obj.maybeSubmitBlockIfNoArTicketInCart=function(){TribeTicketsModal.ShowIfNoTicketWithArInCart||$document.find(tribe.tickets.block.selectors.blockSubmit).on("click",(function(){const $button=$(this),$form=$(this).closest("form"),$cartItems=$form.find(tribe.tickets.block.selectors.item),dialogId=$button.data("js").replace("trigger-dialog-","");let ticketsWithArMetaInCart=0;if($cartItems.each((function(){const $blockCartItem=$(this);if(!$blockCartItem.is(":visible"))return;const qtyInCart=tribe.tickets.block.getQty($blockCartItem);$blockCartItem.data("ticket-ar-fields")&&0<qtyInCart&&ticketsWithArMetaInCart++})),!ticketsWithArMetaInCart){let dialogToDestroy;tribe.dialogs.dialogs.forEach((function(dialog,index){dialog.id===dialogId&&(dialogToDestroy=index)})),isNaN(dialogToDestroy)||tribe.dialogs.dialogs[dialogToDestroy].a11yInstance.destroy(),tribe.tickets.block.ticketsSubmit($form)}}))},obj.bindOptOutChange=function($form){$form.find("[id^=tribe-tickets-attendees-list-optout-]").change((function(){const $this=$(this),mainOptOutCheckboxid=$this.attr("id"),$mainOptOutCheckbox=$("#"+$this.attr("id").substr(0,mainOptOutCheckboxid.indexOf("--")));$this.is(":checked")?$mainOptOutCheckbox.val("1").prop("checked",!0):$mainOptOutCheckbox.val("0").prop("checked",!1)}))},obj.unbindOptOutChange=function($form){$form.find("[id^=tribe-tickets-attendees-list-optout-]").unbind("change")},obj.ready=function(){$document.on("afterUpdateFormTotals.tribeTicketsBlock",obj.bindAfterUpdateFormTotals),$document.on("afterTicketsAddRemove.tribeTicketsBlock",obj.bindModalQuantityChange),$document.on("afterTicketsQuantityChange.tribeTicketsBlock",obj.bindModalQuantityChange),$document.on("beforeTicketsSubmit.tribeTicketsBlock",obj.bindBeforeTicketsSubmit),$document.on("afterSetup.tribeTicketsBlock",obj.bindAfterSetupTicketsBlock),obj.maybeSubmitBlockIfNoArTicketInCart(),obj.bindModalOpen(),obj.bindModalClose(),obj.bindDocumentKeypress()},$(obj.ready)}(jQuery,tribe.tickets.modal);