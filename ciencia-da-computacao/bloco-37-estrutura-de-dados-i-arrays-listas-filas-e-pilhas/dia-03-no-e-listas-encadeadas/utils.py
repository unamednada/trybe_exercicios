from linked_list import LinkedList
from double_linked_list import DoubleLinkedList


def linked_list_to_linked_set(linked_list):
    linked_set = LinkedList()
    while linked_list:
        current_node = linked_list.pop_first()
        if linked_list.index_of(current_node.value) == -1:
            linked_set.insert_last(current_node.value)
    return linked_set

def double_linked_list_to_set(linked_list):
    linked_set = DoubleLinkedList()
    while linked_list:
        current_node = linked_list.pop_first()
        if linked_list.index_of(current_node.value) == -1:
            linked_set.insert_last(current_node.value)
    return linked_set
