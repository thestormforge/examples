# elasticsearch CI kustomization

This kustomization is templated to allow for setting ownerReference to the executing argo-workflow. That way, we don't have any dangling resources in between tests. The owner_references_patch template needs to be converted prior to executing a final `ytt` call on the kustomization itself. Inline kustomize patch doesn't work with ytt, because at that point, it becomes a yaml string.
