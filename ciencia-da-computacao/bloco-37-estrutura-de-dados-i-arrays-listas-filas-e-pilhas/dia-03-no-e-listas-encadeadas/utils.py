from linked_list import LinkedList


def linked_list_to_linked_set(linked_list):
    linked_set = LinkedList()
    current_value = linked_list.head_value
    while current_value:
        if not linked_set.contains(current_value):
            linked_set.insert_last(current_value.value)
        current_value = current_value.next
    return linked_set
    